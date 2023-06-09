import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { EventDay, Paths } from "../../Apis/Types";
import { pathGenEvent } from "../../Apis/Utils";
import "./DayCardS.scss";

interface Props {
    event: EventDay;
}

export const DayCard = ({ event }: Props) => {
    const { date, events, day } = event;
    const navigate = useNavigate();

    //todo make map its own component
    return (
        <div className="DayCard">
            <Card>
                <Card.Header className="EventHeader">
                    <Badge bg="warning">
                        <h3>{date}</h3>
                    </Badge>
                    <h3>{day}</h3>
                </Card.Header>
                <Card.Body className="CardEvents">
                    {events.map((event, index) => {
                        const { eventName, eventId } = event;
                        return (
                            <div className="Event" key={index}>
                                {eventName}
                                <Button
                                    variant="outline-primary"
                                    onClick={(e) => {
                                        navigate(
                                            pathGenEvent[Paths.EventInfo](
                                                eventId
                                            )
                                        );
                                    }}
                                >
                                    Info
                                </Button>
                            </div>
                        );
                    })}
                </Card.Body>
            </Card>
        </div>
    );
};
