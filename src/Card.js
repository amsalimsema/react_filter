const Card = ({ item }) => {
  return (
    <>
      <div className="card_container">
        <div className="card">
          {item.map((Val) => {
            return (
              <div className="cardone" key={Val.id}>
                <div className="card-img">
                  <img src={Val.img} alt={Val.title} />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-desc">{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
