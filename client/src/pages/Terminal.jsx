import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";

function Terminal() {
  const [dir, setDir] = useState("terminal");
  const [inputValue, setInputValue] = useState("");
  const [outputs, setOutputs] = useState([
    {
      id: uuidv4(),
      body: [
        "Hello, welcome to my interactive web terminal!",
        "For a list of available commands, type 'help'.",
      ],
      command: "intro",
    },
  ]);

  gsap.registerPlugin(SplitText);

  const terminalRef = useRef(null);
  const lastCommand = useRef("");

  const navigate = useNavigate();

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
    { command: "exit", desc: "Go back to the home page." },
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

    exit: () => {
      pushOutput(
        [PROMPT + inputValue, "Exiting and redirecting..."],
        inputValue
      );
      setInputValue("");
      setTimeout(() => {
        navigate("/");
      }, 370);
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

  return (
    <>
      <div
        ref={terminalRef}
        className={`w-screen h-screen overflow-x-hidden font-mono p-3 leading-5 bg-neutral-950 text-gray-200 ${
          spacingCommands.includes(lastCommand.current.toLowerCase())
            ? "space-y-0"
            : "space-y-5"
        }`}
      >
        <div id="output-container">
          {outputs.map(({ id, body, command }, index) => (
            <div
              key={id}
              className={`${spacingCommands.includes(command) ? "" : "mb-5"} ${
                index === outputs.length - 1 && "latest-output"
              }`}
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
            type="text"
            autoFocus={true}
            className="resize-none flex-1 outline-0"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => e.target.focus()}
          />
        </form>
      </div>
    </>
  );
}

export default Terminal;
