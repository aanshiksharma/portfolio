import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

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
    },
  ]);

  const terminalRef = useRef(null);
  const lastCommand = useRef("");

  const navigate = useNavigate();

  const PROMPT = `aanshik.dev/${dir}:~$ `;

  useEffect(() => {
    if (terminalRef.current)
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [outputs]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const commandsList = [
    { command: "help", desc: "See a list of all available commands." },
    { command: "projects", desc: "See a list of all projects." },
    { command: "exit", desc: "Go back to the home page." },
    { command: "admin", desc: "Get to know the admin." },
    {
      command: "calc(expression)",
      desc: "Calculates an expression. Throws an error for invalid expression.",
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
      pushOutput(body);
    },

    projects: () => {
      pushOutput([PROMPT + inputValue, "Projects command output here"]);
    },

    exit: () => {
      pushOutput([PROMPT + inputValue, "Exiting and redirecting..."]);
      setInputValue("");
      setTimeout(() => {
        navigate("/");
      }, 370);
    },

    admin: () => {
      pushOutput([PROMPT + inputValue, "Admin info here"]);
    },

    clear: () => {
      setOutputs([]);
      setInputValue("");
    },

    cls: () => {
      setOutputs([]);
      setInputValue("");
    },

    "": () => {
      pushOutput([PROMPT]);
      setInputValue("");
    },
  };

  const pushOutput = (lines) => {
    if (outputs.length === 0) setOutputs([{ id: uuidv4(), body: lines }]);
    else {
      const newOutputs = setOutputs((prev) => [
        ...prev,
        { id: uuidv4(), body: lines },
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
      pushOutput([
        PROMPT + inputValue,
        `'${inputValue}' is not recognized as a command.`,
        "For a list of available commands, type 'help'.",
      ]);
    }
  };

  const spacingCommands = ["", "clear", "cls"];

  return (
    <>
      <div
        ref={terminalRef}
        className={`w-screen h-screen overflow-hidden font-mono p-2 leading-5 bg-neutral-950 text-gray-200 ${
          spacingCommands.includes(lastCommand.current)
            ? "space-y-0"
            : "space-y-5"
        }`}
      >
        <div id="output-area">
          {outputs.map((output) => (
            <div key={output.id} className="mb-5">
              {output.body.map((text, index) => (
                <p key={output.id + index}>{text}</p>
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
