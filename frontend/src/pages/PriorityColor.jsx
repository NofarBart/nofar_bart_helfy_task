import React from 'react'

const PriorityColor = ({priority}) => {

    const getColor = () => {
        switch (priority.toLowerCase()) {
            case 'high':
                return 'red';
            case 'medium':
                return 'yellow';
            case 'low':
                return 'green';
        }
    }
  return (
    <span style={{color: getColor(), fontWeight: "bold"}}>{priority}</span>
  );
};

export default PriorityColor