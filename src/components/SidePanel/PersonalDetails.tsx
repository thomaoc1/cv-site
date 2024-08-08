import './SidePanelStyle.css'

function PersonalDetails() {
    const details = [
        { key: 'Country', value: 'Netherlands' },
        { key: 'City', value: 'Groningen' },
        { key: 'Age', value: '23' },
    ]
    return (
        <div className='details-container'>
            {details.map((detail, index) => (
                <div key={index} className='details-key-value-pair'>
                    <p>{detail.key}: </p>
                    <p className='details-value'>{detail.value}</p>
                </div>
            ))}
        </div>
    )
}

export default PersonalDetails;