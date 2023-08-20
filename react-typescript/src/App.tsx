import './App.css'
import { Heading } from './components/heading'
import { Person } from './components/person'
import { Value } from './components/propstxt'
import { Status } from './components/status'
import UseEffectPrat from './components/fetchData'
import ReducerDemo from './components/reducerDemo'
import UseImperativeHandlerDemo from './components/useImperativeHandlerDemo'
import ImperativeHandle from './components/ImperativeHandle'
import ContextTut from './components/contextTutorial'
import UseMemoTut from './components/useMemoTut'
import UseCallBackTut from './components/useCallBackTut'

function App() {

  const names = [
    {
      firstname: "Ashish",
      lastname: "Thakur"
    },
    {
      firstname: "Check",
      lastname: "Check"
    },
    {
      firstname: "Test",
      lastname: "Test"
    }
  ]

  return <>
    <Value name="Check" count={10} isloggedin={false} />
    <Person check={names} />
    <Status status="loading" />
    <Heading><Person check={names} /></Heading>
    <UseEffectPrat />
    <ReducerDemo />
    <ImperativeHandle />
    <ContextTut />
    <UseMemoTut />
    <UseCallBackTut />
  </>
}

export default App
