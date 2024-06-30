import React, { useState, useEffect } from "react";
import "./task.css";

interface TaskProps {
  name: string;
  reward: number;
  show:string;
  link: string; // Changed from 'url' to 'link' to avoid conflict
  balanceRef: React.MutableRefObject<{ value: number }>;
  onRewardClaimed: () => void;
}

const Task: React.FC<TaskProps> = ({ name, reward,show, link, balanceRef, onRewardClaimed }) => { // Updated destructuring to 'link'
  const [taskState, setTaskState] = useState<'go' | 'check' | 'countdown' | 'claim' | 'done'>('go');
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (taskState === 'countdown' && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (taskState === 'countdown' && countdown === 0) {
      setTaskState('claim');
    }
    return () => clearTimeout(timer);
  }, [taskState, countdown]);

  const handleGoClick = () => {
    window.open(link, '_blank'); // Updated to use 'link' prop
    setTaskState('check');
  };

  const handleCheckClick = () => {
    setTaskState('countdown');
  };

  const handleClaimClick = () => {
    balanceRef.current.value += reward;
    onRewardClaimed();
    setTaskState('done');
  };

  const renderButton = () => {
    switch (taskState) {
      case 'go':
        return <button className="taskgo" onClick={handleGoClick}>Go</button>;
      case 'check':
        return <button className="taskcheck" onClick={handleCheckClick}>Check</button>;
      case 'countdown':
        return <button className="taskcount" disabled>{countdown}s</button>;
      case 'claim':
        return <button className="taskclaim" onClick={handleClaimClick}>Claim</button>;
      case 'done':
        return <button className="taskdone" disabled>✔️</button>;
      default:
        return null;
    }
  };

  return (
    <div className="task-box">
      <span className="taskspan">
      <p className="taskp"><span>{name} ({show}Coin)</span> <span>{renderButton()}</span></p>
      </span>
    </div>
  );
};

export default Task;
