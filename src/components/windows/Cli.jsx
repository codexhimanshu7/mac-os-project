import MacWindow from './MacWindow'
import TerminalModule from 'react-console-emulator'
import "./cli.scss"
const Terminal = TerminalModule.default ?? TerminalModule

const commands = {
  about: {
    description: 'Get a short introduction.',
    usage: 'about',
    fn: () => 'Hi! I am a Frontend developer and motivated learner who enjoy learning new skills and exploring creative ideas'
  },
  skills: {
    description: 'List example skills.',
    usage: 'skills',
    fn: () => 'HTML,CSS,SCSS,Tailwind CSS,Responsiveness,Advance CSS,Animation CSS,Javascript,React Js Redux Toolkit,Git/Github'
  },
  projects: {
    description: 'Show featured portfolio projects.',
    usage: 'projects',
    fn: () => 'Mac OS project,Productivity Dashboard,Image editor,notes web project,gallery project,kanban board,reel scroller feature etc'
  },
  contact: {
    description: 'Show contact details.',
    usage: 'contact',
    fn: () => 'Contact: 6280603321 Email: himanshukumar1531b@gmail.com'
  },
  github: {
    description: 'Show the GitHub profile link.',
    usage: 'github',
    fn: () => 'GitHub: https://github.com/codexhimanshu7'
  },
  resume: {
    description: 'Show how to find the resume.',
    usage: 'resume',
    fn: () => 'Use the Resume window in the portfolio dock to view the resume.'
  },
  echo: {
    description: 'Echo the text you provide.',
    usage: 'echo <text>',
    fn: (...args) => args.join(' ')
  }
}

const welcomeMessage = [
  "Welcome to ShibhamRoy's portfolio terminal!",
  'Available commands: about, skills, projects, contact, github, resume, echo',
  "Type 'help' for command descriptions."
]

const Cli = ({windowName,setWindowsState}) => {
  return (
    <MacWindow  windowName={windowName}  setWindowsState={setWindowsState}>
      <div className="cli-window" style={{ height: '100%', width: '100%' }}>
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="ShibhamRoy:~$"
          promptLabelStyle={{color:'#00ff00'}}
        />
      </div>
    </MacWindow>
  )
}

export default Cli                                       