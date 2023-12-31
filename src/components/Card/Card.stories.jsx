import styles from "./styles.module.scss";
import defaultImage from "../../images/default-image.png";
import { ReactComponent as PlaceImage } from "../../images/EventInfo/place.svg";
import { ReactComponent as CalendarImage } from "../../images/EventInfo/calendar.svg";
import { ReactComponent as TimeImage } from "../../images/EventInfo/time.svg";
import { Card as card } from "./Card";

export default {
  title: "Components/Card",
  component: card,
  parameters: {
    componentSubtitle: "Components > Card",
  },
  args: { event: defaultEvent() },
  argTypes: {
    event: {
      description: "Object from API",
    },
    cardDirection: {
      options: ["row", "column"],
      control: "radio",
      defaultValue: "row",
      description: "Flex Direction inline style",
    },
    style: {
      description: "Optional inline style",
    },
  },
};

function defaultEvent() {
  return {
    id: 1,
    title: "Событие про Storybook или длинное название",
    city: "Москва",
    date_start: "Ср, 25 сентября",
    isLiked: false,
    price: "15 000 р.",
    url: "string",
    image:
      "https://it.acceleratorpracticum.ru/media/events/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-06-10_085724.png",
  };
}

const cardDetails = [
  {
    icon: <CalendarImage />,
    content: defaultEvent().date_start,
  },
  {
    icon: <TimeImage />,
    content: "10:00 - 12:00",
  },
  {
    icon: <PlaceImage />,
    content: defaultEvent().city,
  },
  {
    content: defaultEvent().price,
    styles: styles.price,
  },
];

/** Применимость: CardList */
export const Card = ({ event, cardDirection }) => {
  return (
    <li
      key={event.id}
      className={`${styles.card}`}
      style={{ padding: "0", margin: "0", flexDirection: cardDirection }}
    >
      <div className={styles.imageContainer}>
        <img src={event.image} alt="event_picture" className={styles.image} />
        <button
          className={`${
            event.isLiked ? styles.likeButtonActive : styles.likeButton
          }`}
          type="button"
        ></button>
      </div>
      <div className={`${styles.descriptionContainer}`}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{event.title}</h3>
        </div>
        <ul className={styles.rowContainer} style={{ padding: "0" }}>
          {cardDetails.map((item, index) => (
            <li
              key={index}
              className={styles.rowItem}
              style={{ display: "flex", alignItems: "center" }}
            >
              {item.icon}
              <p className={item.styles} style={{ margin: "0" }}>
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

//export const Default = (args) => <Card {...args} />;
/** Применимость: CardList */
export const IsLiked = () => {
  const isLikedEvent = {
    ...defaultEvent(),
    isLiked: true,
    title: "Card в состоянии isLiked",
  };
  return <Card event={isLikedEvent} />;
};
/** Применимость: CardList */
export const DefaultImage = () => {
  const newEvent = {
    ...defaultEvent(),
    image: defaultImage,
    title: "Card в состоянии DefaultImage",
  };
  return <Card event={newEvent} />;
};
