import React from 'react'

const SurveyModal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;
  return (
    <div>
      <div>
        <div>
            <h2>🧠 Quick Survey</h2>
            <button onClick={onClose}>✖</button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default SurveyModal
