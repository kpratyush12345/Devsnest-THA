const ItemsData = [
  {
    id: 1,
    item: "Pizza",
    cal: 56,
  },
  {
    id: 2,
    item: "Burger",
    cal: 69,
  },
  {
    id: 3,
    item: "Coke",
    cal: 500,
  },
  {
    id: 4,
    item: "Brownie",
    cal: 180,
  },
  {
    id: 5,
    item: "Fried Rice",
    cal: 90,
  },
  {
    id: 6,
    item: "Lassania",
    cal: 200,
  },
  {
    id: 7,
    item: "Pani Puri",
    cal: 10,
  },
];

function Item() {
  return (
    <div>
      <div className="center-head">
        <h1>Calorie Read Only</h1>
      </div>
      <div className="content">
        <div className="item-box">
          {ItemsData.map((items) => (
            <div key={items.id} className="items">
              <h1>{items.item}</h1>
              <p>You have consumed {items.cal} cals today</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;
