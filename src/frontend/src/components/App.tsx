import { AgentPreview } from "./agents/AgentPreview";
import { ThemeProvider } from "./core/theme/ThemeProvider";

const App: React.FC = () => {
  // State to store the agent details
  const agentDetails ={
      id: "chatbot",
      object: "chatbot",
      created_at: Date.now(),
      name: "ACPL Assistant",
      description: "Your intelligent ACPL assistant ready to help you with any questions.",
      model: "default",
      metadata: {
        logo: "https://www.acpl.com/website/assets/images/logo.svg",
      },
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        <AgentPreview
          resourceId="sample-resource-id"
          agentDetails={agentDetails}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
