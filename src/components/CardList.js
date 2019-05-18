import React from "react";

import "./CardList.css";

function CardList() {
  return (
    <div className="card-body">
      <ul className="card-list">
        <li className="card-list-item row">
          <div className="card-list-month">
            <div className="card-list-day">Tue</div>
            <div>Sep 22</div>
          </div>
          <div className="card-list-time row">
            <button className="button-primary">7:00pm</button>
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-list-month">
            <div className="card-list-day">Wed</div>
            <div>Sep 23</div>
          </div>
          <div className="card-list-time">
            <div className="card-sold-out">
              <div className="card-sold-out-text">Sold Out</div>
              <div className="card-sold-out-time">8:00pm</div>
            </div>
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-list-month">
            <div className="card-list-day">Thu</div>
            <div>Sep 24</div>
          </div>
          <div className="card-list-time">
            <button className="button-primary">2:00pm</button>
            <button className="button-secondary">8:00pm</button>
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-list-month">
            <div className="card-list-day">Fri</div>
            <div>Sep 25</div>
          </div>
          <div className="card-list-time">
            <button className="button-secondary">7:00pm</button>
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-list-month">
            <div className="card-list-day">Sat</div>
            <div>Sep 26</div>
          </div>
          <div className="card-list-time">
            <button className="button-primary">2:00pm</button>
            <div className="card-sold-out">
              <div className="card-sold-out-text">Sold Out</div>
              <div className="card-sold-out-time">8:00pm</div>
            </div>
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-list-month">
            <div className="card-list-day">Sun</div>
            <div>Sep 27</div>
          </div>
          <div className="card-list-time">
            <button className="button-primary">2:00pm</button>
            <button className="button-primary">8:00pm</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CardList;
