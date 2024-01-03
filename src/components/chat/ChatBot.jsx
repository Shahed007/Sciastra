import logo from "../../assets/logo/sciastra.webp";

const ChatBot = () => {
  return (
    <div className="fixed bottom-5 right-0 z-[500] ">
      <a
        href="https://mediafiles.botpress.cloud/61ce4972-28b4-4483-93c6-13a6f3c2ed1e/webchat/bot.html"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center  justify-between bg-white shadow-sm border rounded-lg px-4 py-2">
          <img className="h-12" src={logo} alt="" />
          <h1>Chat with us</h1>
        </div>
      </a>
    </div>
  );
};

export default ChatBot;
