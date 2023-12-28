import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img className="addBtn" src={addBtn} alt="new chat" /> New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" />
              What is Javascript?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img className="listItemsImg" src={home} alt="home" />
            Home
          </div>
          <div className="listItems">
            <img className="listItemsImg" src={saved} alt="saved" />
            Saved
          </div>
          <div className="listItems">
            <img className="listItemsImg" src={rocket} alt="rocket" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              similique sapiente esse ducimus omnis cumque facilis reprehenderit
              ab adipisci vel!
            </p>
          </div>
          <div className="chat">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              dolore, rem ad reiciendis, ab hic, totam excepturi consequuntur
              illum eos incidunt libero nostrum autem aut sed praesentium
              exercitationem quos? Unde quibusdam corporis repudiandae mollitia
              libero voluptate obcaecati quam odit iusto voluptates aspernatur
              pariatur reiciendis nihil dolorem inventore sint, asperiores
              consequatur magnam numquam id culpa facere exercitationem quos?
              Reprehenderit laborum animi nemo necessitatibus nobis fuga dolores
              eos? Alias odio iure obcaecati voluptas ab culpa atque numquam,
              quis beatae dolore labore veritatis temporibus quaerat praesentium
              id vitae accusantium voluptate repellendus mollitia quos a
              pariatur quod quam? Quod dolorem pariatur recusandae quos
              perspiciatis?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="input">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or
            facts. ChatGPT August 20 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
