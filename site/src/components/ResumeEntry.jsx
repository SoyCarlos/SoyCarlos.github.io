const ResumeEntry = ({ org, website, position, location, duration, summary }) => {
    return (
        <div className="pb-1">
            <div className="text-xl font-bold hover:underline">
                <a href={website} target="_blank">{org}</a>
            </div>
            <div className="text-sm">{position} &bull; {location} &bull; {duration}</div>
            <div className="text-sm pl-4" dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
    );
};

export default ResumeEntry;