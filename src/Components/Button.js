const Button = ({ start, stop, reset, status, resume }) => {
  return (
    <div>
        {status === 0 && <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>START</button>}
        {status === 1 && 
            <div>
                <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>STOP</button>
                <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>RESET</button>
            </div>}
        {status === 2 && 
             <div>
                <button className="stopwatch-btn stopwatch-btn-gre" onClick={resume}>RESUME</button>
                <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>RESET</button>
            </div>}
    </div>
  )
}

export default Button