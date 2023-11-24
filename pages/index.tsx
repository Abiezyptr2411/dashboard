import Head from "next/head";
import { stringify } from "querystring";
import React from "react";
import { BubbleChat } from 'flowise-embed-react';
import {
  Button,
  ButtonsRow,
  Container,
  Icon,
  Panel,
  PanelContent,
  PanelHeader,
  TextAreaInput,
  WelcomeHeader,
  SettingsModal,
  Dashboard,
  ButtonIcon,
  CodeHighlighter,
  TextInput,
  ButtonLink,
  UploadDatasetButton,
  ViewSelect,
  OpenAIErrorMessage,
  EmptyMessage,
  DataLoadedMessage,
  MissingApiKeyMessage,
} from "../components";
import { HireUs } from "../components/layout/HireUs";
import { Loader } from "../components/layout/Loader";
import { Table } from "../components/layout/Table";
import { generateDashboard, generatePrompt } from "../openai";
import { getRandomDataset, sample } from "../openai/sample";
import { IDashboard, IDataset, ISettings } from "../types";
import { isDataValid, parseData, stringifyData } from "../utils/parseData";
import gtag from "../lib/gtag";
import { getSpecificDataset } from '../openai/sample';

const floatingButtonStyle = {
  position: 'fixed',
  bottom: '40px',
  left: '20px',
  zIndex: 9999,
  backgroundColor: 'blue', // Ganti dengan warna latar belakang yang diinginkan
  color: 'white', // Ganti dengan warna teks yang diinginkan
  padding: '10px',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default function Home() {
  const [view, setView] = React.useState("dashboard");

   const steps = [
      {
        id: 'greeting',
        message: 'Hello! How are you today?',
        end: true,
      }
    ];

  const [settings, setSettings] = React.useState<ISettings>({
    apikey: "",
    sampleRows: 10,
    model: ""
  });
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState<IDataset>();
  const [userContext, setUserContext] = React.useState<string>("");
  const [showTextarea, setShowTextarea] = React.useState(false);
  const [currentSampleIndex, setCurrentSampleIndex] = React.useState(-1);
  const [dashboard, setDashboard] = React.useState<IDashboard | null>();
  const [showSettings, setShowSettings] = React.useState(false);
  const [selectedDatasetIndex, setSelectedDatasetIndex] = React.useState(0); 
   const [showChatbot, setShowChatbot] = React.useState(false);

  React.useEffect(() => {
    const config = localStorage.getItem("analyzer-settings");
    if (config) {
      setSettings(JSON.parse(config) as ISettings);
    }

    const { data, dashboard, context, index } = getRandomDataset(-1);
    setData(parseData(data));
    setDashboard(dashboard);
    setUserContext(context);
    setCurrentSampleIndex(index);
  }, []);

  const handleAnalyze = React.useCallback(() => {
    if (!settings.apikey) {
      setShowSettings(true);
    } else if (data) {
      setLoading(true);
      generateDashboard(data, userContext, settings.sampleRows, settings.apikey, settings.model)
        .then((response) => {
          setDashboard(response.dashboard);
          setLoading(false);
        })
        .catch((err) => {
          setDashboard(null);
          setLoading(false);
        });
    }
  }, [data, userContext, settings]);

  const handleRandomDataset = React.useCallback(() => {
    const { data, dashboard, context, index } =
      getRandomDataset(currentSampleIndex);
    setData(parseData(data));
    setDashboard(dashboard);
    setUserContext(context);
    setCurrentSampleIndex(index);
  }, [currentSampleIndex]);

  // console.log(dashboard, stringifyData(data || []));

  const handleClear = React.useCallback(() => {
    setData(undefined);
    setDashboard(null);
    setUserContext("");
    setSelectedDatasetIndex(-1);
  }, []);

  const handleSettingsChange = React.useCallback((settings: ISettings) => {
    localStorage.setItem("analyzer-settings", JSON.stringify(settings));
    setSettings(settings);
    setShowSettings(false);
  }, []);

  const handleShowSettings = React.useCallback(() => {
    setShowSettings(true);
  }, []);

  const handleCloseSettings = React.useCallback(() => {
    setShowSettings(false);
  }, []);

  const handleDatasetChange = React.useCallback((dataset: string) => {
    gtag.report("event", "upload_data", {
      event_category: "settings",
      event_label: "uploaded",
    });
    setData(parseData(dataset));
    setDashboard(null);
  }, []);

  const handleClick = React.useCallback(() => {
    setUserContext(" ");
  }, []);

  const handleClearContext = React.useCallback(() => {
    setUserContext("");
  }, []);

    const handleFileUpload = (uploadedData: string) => {
    gtag.report("event", "upload_data", {
      event_category: "settings",
      event_label: "uploaded",
    });
    const parsedData = parseData(uploadedData);
    setData(parsedData);
    setDashboard(null);
  };

  const handleSelectDataset = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(event.target.value, 10);
    try {
      const selectedDataset = getSpecificDataset(selectedIndex);
      setData(parseData(selectedDataset.data));
      setDashboard(selectedDataset.dashboard);
      setUserContext(selectedDataset.context);
      setSelectedDatasetIndex(selectedIndex); // Perbarui state indeks dataset yang dipilih
    } catch (error) {
      console.error(error);
      setSelectedDatasetIndex(-1); // Atur kembali ke nilai yang tidak valid (-1, misalnya) ketika terjadi kesalahan
      // Handle error jika terjadi kesalahan dalam pemilihan dataset
    }
  };

  const handleButtonClick = () => {
    setShowTextarea(!showTextarea);
  };

  const handleDeleteButtonClick = () => {
    setShowTextarea(false);
    // Handle delete button click
  };

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleOutsideClick = () => {
    if (showChatbot) {
      setShowChatbot(false);
    }
  };

  return (
    <>
      <Head>
        <title>AI DataViz Insighter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Leniolabs_ LLC" />
        {/* OG Meta tags */}
        <meta name="og:type" content="website" />
        <meta
          property="og:image"
          content="https://labs.leniolabs.com/data-dashboard/meta.png"
        />
        <meta property="og:title" content="AI Data Dashboard" />
        <meta
          property="og:description"
          content="Visualize data with our tool created using OpenAI's GPT3 technology"
        />
        <meta
          name="og:url"
          content="https://labs.leniolabs.com/data-dashboard/"
        />
        {/* Twitter Meta tags */}
        <meta name="twitter:creator" content="Leniolabs_ LLC" />
        <meta
          property="twitter:image"
          content="https://labs.leniolabs.com/data-dashboard/meta.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GPT3 Data Visualization Tool" />
        <meta
          name="twitter:url"
          content="https://labs.leniolabs.com/data-dashboard/"
        />
        <meta
          property="twitter:description"
          content="Visualize and analyze data with our app created using OpenAI's GPT3"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Panel>
          <PanelHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '70%', margin: 0 }}>
              <h2>AI DataViz Insighter</h2>
            </div>
            <img
              src="/tsel-logo.png" // Ganti dengan path gambar yang diinginkan
              style={{ width: '20%' }}
              alt="Logo"
            />
          </div>

           <WelcomeHeader
              subtitle={
                <>
                  Upload your CSV dataset or{" "}
                  {/* <ButtonLink onClick={handleRandomDataset} accent="BRAND">
                    try it with random data.
                  </ButtonLink> */}
                  <select
                      id="datasetSelect"
                      onChange={handleSelectDataset}
                      value={selectedDatasetIndex !== -1 ? selectedDatasetIndex : ""}
                    >
                      <option value="">select data</option>
                      <option value={0}>Data CB</option>
                      <option value={1}>Data Orbit</option>
                      <option value={2}>Data SuperSeru</option>
                  </select>
                </>
              }
            />
            <ButtonIcon icon="cog" onClick={handleShowSettings} />
            {showSettings && (
              <SettingsModal
                value={settings}
                onChange={handleSettingsChange}
                onCancel={handleCloseSettings}
              />
            )}

            <ButtonsRow>
              {/* <UploadDatasetButton onUpload={handleDatasetChange} /> */}
              <UploadDatasetButton onUpload={handleFileUpload} />
              <Button
                className="trash"
                disabled={!data}
                outline
                onClick={handleClear}
              >
                <Icon icon="thrash" /> Clear
              </Button>
              <Button 
               outline
               className="analyze"
               onClick={handleToggleChatbot}>
                <Icon icon="chat-dots" /> Chatbot
              </Button>
             
              <Button
                className="analyze"
                disabled={!data && !!settings?.apikey}
                onClick={handleAnalyze}
              >
                {settings?.apikey && dashboard && data ? (
                  <Icon icon="arrow" />
                ) : null}{" "}
                {(() => {
                  if (!settings.apikey) return "Set up your API KEY";
                  return dashboard && data ? "Re-analyze" : "Analyze";
                })()}
              </Button>
            </ButtonsRow>

             <div
              onClick={handleOutsideClick}
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
              }}
              >
              {showChatbot && (
                <BubbleChat
        chatflowid="182a577c-5697-4272-a31e-c349714b967d"
        apiHost="http://localhost:3000"
        apiToken="your-api-token" // Make sure to replace with your actual API token
      />
              )}
            </div>

            {userContext ? (
              <TextInput
                type="textarea"
                label={
                  <>
                    Context about the data
                    <ButtonIcon icon="caret-down" onClick={handleClearContext} />
                  </>
                }
                value={userContext}
                onChange={setUserContext}
              />
            ) : (
              <ButtonLink onClick={handleClick}> + Add Context</ButtonLink>
            )}
          </PanelHeader>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <PanelContent>
              <Table
                data={data || []}
                onChange={(newData) => {
                  setData(newData);
                }}
              />
            </PanelContent>

            <PanelHeader
              style={{
                position: 'absolute',
                top: '-10px', // Menyesuaikan nilai ini untuk mengatur jarak ke atas
                padding: '10px',
              }}
            >
               {showTextarea && (
  <TextInput
    type="textarea"
    value={`1. Revenue Performance: Since its launch on September 4, the daily revenue from Super Seru is around ~2.6 billion IDR, with significant contributions from various areas and channels​​.\n
2. Super Seru 100K's Performance: The Super Seru 100K package has become the most popular, contributing 73.4% to the total with a significant revenue growth of +237.2%​​.\n
3. Brand Perception and Customer Feedback: The Super Seru program has helped shift Telkomsel’s brand perception from premium to value for money. It is suitable for customers needing big data quotas, though there are concerns about the validity of the Super Seru packages. The packages are generally viewed as attractive and competitive compared to similar offerings by competitors like Indosat​​.\n
4. Overall Contribution: Super Seru contributes to an increase in Total Payload, accounting for 2% of the total payload​​.`}
    label={
      <>
        Key Summarize Point
        <ButtonIcon icon="caret-down" onClick={handleDeleteButtonClick} />
      </>
    }
  />
)}

              <ButtonLink onClick={handleButtonClick}>
                {showTextarea ? '' : '+ Key Summarize Point'}
              </ButtonLink>
               
            </PanelHeader>
          </div>

        </Panel>
        <Panel>
          <PanelContent>
            <ViewSelect value={view} onChange={setView} />
            {!settings.apikey && !data && !dashboard ? (
              <MissingApiKeyMessage
                onApiKeyClick={handleShowSettings}
                onRandomData={handleRandomDataset}
              />
            ) : null}
            {settings.apikey && !data && !dashboard ? (
              <EmptyMessage
                onRandomData={handleRandomDataset}
                onUpload={handleDatasetChange}
              />
            ) : null}
            {settings.apikey && data && !dashboard ? (
              <DataLoadedMessage onAnalyze={handleAnalyze} />
            ) : null}
            {dashboard && data && view === "dashboard" ? (
              <Dashboard data={data} dashboard={dashboard} />
            ) : null}
            {dashboard && view === "code" ? (
              <CodeHighlighter dashboard={dashboard} />
            ) : null}
            {data && view === "prompt" && (
              <TextAreaInput
                disabled
                value={generatePrompt(data, userContext, settings.sampleRows, settings.model)}
              />
            )}
          </PanelContent>
        </Panel>
      </Container>
      {loading && <Loader />}
    </>
  );
}