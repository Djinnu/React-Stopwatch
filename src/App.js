import { useState } from 'react'
import Display from "./Components/Display"
import Button from "./Components/Button"
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  //Not started = 0
  //started = 1
  //stopped = 2
  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10))
  }

  const run = () => {
    if(time.m === 60) {
      time.h++
      time.m = 0
    }
    if(time.s === 60) {
      time.m++
      time.s = 0
    }
    if(time.ms === 100) {
      time.s++
      time.ms = 0
    }
    time.ms++
    return setTime({ms:time.ms, s:time.s, m:time.m, h:time.h})
  }

  const stop  = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ms:0, s:0, m:0, h:0})
  }

  const resume =  () => start()

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time}/>
          <Button status={status} start={start} stop={stop} reset={reset} resume={resume}/>
        </div>
      </div>
    </div>
  );
}

export default App;
