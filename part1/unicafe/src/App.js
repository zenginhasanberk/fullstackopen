import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const StatisticLine = ({text, value}) => {
    return(
        <tr>
            <td>{text}</td>
            <td>{value} {text === 'positive' && '%'}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad, total}) => {
    if (total !== 0) {
        return(
            <table>
                <tbody>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='average' value={(good - bad) / total} />
                <StatisticLine text='positive' value={(good / total) * 100} />
                </tbody>
            </table>
        )
    }
    return(
        <div>No feedback given</div>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;

  const handleGood = () => {
    setGood(good + 1);
}

const handleNeutral = () => {
    setNeutral(neutral + 1);
}

const handleBad = () => {
    setBad(bad + 1);
}

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGood} text='good'/>
        <Button handleClick={handleNeutral} text='neutral'/>
        <Button handleClick={handleBad} text='bad'/>

        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App