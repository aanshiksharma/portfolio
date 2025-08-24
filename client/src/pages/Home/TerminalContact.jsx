import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

import { Icon } from "../../components/ui/Button";

function TerminalContact() {
  const [dir, setDir] = useState("connect");
  const [inputValue, setInputValue] = useState("");
  const [outputs, setOutputs] = useState([
    {
      id: uuidv4(),
      body: [
        "Use this terminal to reach out or type 'help' for a list of commands.",
      ],
      command: "intro",
    },
  ]);
  const [visible, setVisible] = useState(true);

  const terminalRef = useRef(null);
  const lastCommand = useRef("");
  const inputRef = useRef();

  const PROMPT = `aanshik.dev/${dir}:~$ `;

  useEffect(() => {
    if (terminalRef.current)
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [outputs]);

  useEffect(() => {
    // split all elements with the class "split" into words and characters
    let split = SplitText.create("#output-container .latest-output p", {
      type: "chars",
    });

    // now animate the characters in a staggered fashion
    if (split.chars.length > 0)
      gsap.from(split.chars, {
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        duration: 0.01,
        stagger: 0.0025,
      });
  }, [outputs]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const commandsList = [
    { command: "help", desc: "See a list of all available commands." },
    { command: "intro", desc: "See the intro text on the console." },
    { command: "projects", desc: "See a list of all projects." },
    { command: "admin", desc: "Get to know the admin." },
    {
      command: "calc(expression)",
      desc: "Calculate an expression.",
    },
    { command: "clear or cls", desc: "Clears the terminal." },
  ];

  // Command handlers map
  const commandHandlers = {
    help: () => {
      const body = [
        PROMPT + inputValue,
        ...commandsList.map((com) => `${com.command} : ${com.desc}`),
      ];
      pushOutput(body, inputValue);
    },

    intro: () => {
      pushOutput(
        [
          PROMPT + inputValue,
          "Hello, welcome to my interactive web terminal!",
          "For a list of available commands, type 'help'.",
        ],
        inputValue
      );
      setInputValue("");
    },

    projects: () => {
      pushOutput(
        [PROMPT + inputValue, "Projects command output here"],
        inputValue
      );
    },

    admin: () => {
      pushOutput([PROMPT + inputValue, "Admin info here"], inputValue);
    },

    clear: () => {
      setOutputs([], inputValue);
      setInputValue("");
    },

    cls: () => {
      setOutputs([], inputValue);
      setInputValue("");
    },

    "": () => {
      pushOutput([PROMPT], inputValue);
      setInputValue("");
    },
  };

  const pushOutput = (lines, command) => {
    if (outputs.length === 0)
      setOutputs([{ id: uuidv4(), body: lines, command: command }]);
    else {
      setOutputs((prev) => [
        ...prev,
        { id: uuidv4(), body: lines, command: command },
      ]);
    }
    setInputValue("");
  };

  const runCommand = () => {
    lastCommand.current = inputValue;
    const command = inputValue.toLowerCase();

    if (commandHandlers[command]) {
      commandHandlers[command]();
    } else {
      pushOutput(
        [
          PROMPT + inputValue,
          `'${inputValue.split(" ")[0]}' is not recognized as a command.`,
          "For a list of available commands, type 'help'.",
        ],
        command
      );
    }
  };

  const spacingCommands = ["", "clear", "cls"];

  if (visible) {
    return (
      <>
        <div
          id="contact-terminal-container"
          className=" rounded-md overflow-hidden border-1 border-text-base/10"
          onClick={() => inputRef.current.focus()}
        >
          <div
            className="title-bar text-xs leading-5 px-4 py-2 border-b-1 flex items-center gap-2 
          bg-surface border-b-text-base/10 text-text-base"
          >
            <button
              type="button"
              className="bg-red-500 w-3 h-3 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setVisible(false)}
            ></button>

            <button
              type="button"
              className="bg-yellow-500 w-3 h-3 rounded-full overflow-hidden cursor-pointer"
            ></button>

            <button
              type="button"
              className="bg-green-500 w-3 h-3 rounded-full overflow-hidden cursor-pointer"
            ></button>

            <p className="title">{`$aanshik.dev/${dir}`}</p>
          </div>
          <div
            ref={terminalRef}
            className={`w-full h-50 overflow-x-hidden font-mono p-3 leading-5 bg-black ${
              spacingCommands.includes(lastCommand.current.toLowerCase())
                ? "space-y-0"
                : "space-y-5"
            }`}
          >
            <div id="output-container">
              {outputs.map(({ id, body, command }, index) => (
                <div
                  key={id}
                  className={`${
                    spacingCommands.includes(command) ? "" : "mb-5"
                  } ${index === outputs.length - 1 && "latest-output"}`}
                >
                  {body.map((text, index) => (
                    <p key={id + index}>{text}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Form field that inputs the commands */}
            <form
              className="flex gap-[1ch]"
              onSubmit={(event) => {
                event.preventDefault();
                runCommand(event);
              }}
            >
              <p>{PROMPT}</p>

              <input
                ref={inputRef}
                type="text"
                className="resize-none flex-1 outline-0"
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
              />
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="p-8">
        <p className="text-center">
          You close the Terminal. Refresh the page to bring it back.
        </p>
      </div>
    );
  }
}

export default TerminalContact;
