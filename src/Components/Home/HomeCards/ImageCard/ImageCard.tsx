import { Card } from "react-bootstrap";
import InsideStore from "../../../../Assets/Images/cropped-store-image.png";
import GameWall from "../../../../Assets/Images/gameWall-lvlG.jpeg";
import StoreFront from "../../../../Assets/Images/storeFront-lvlG.jpeg";
import { ImageCarousel } from "../../../ImageCarousel/ImageCarousel";
import "./ImageCardS.scss";

export const ImageCard = () => {
    const images = [StoreFront, InsideStore, GameWall];
    return (
        <Card className="ImageCard">
            <Card.Body>
                <ImageCarousel images={images} />
            </Card.Body>
            <Card.Footer>
                <Card.Link href="https://discord.gg/yDyawXka3s">
                    Discord
                </Card.Link>
                <Card.Link href="https://www.facebook.com/levelupknox/">
                    Facebook
                </Card.Link>
            </Card.Footer>
        </Card>
    );
};
