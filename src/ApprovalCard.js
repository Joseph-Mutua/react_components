import React, { Component } from 'react';

const ApprovalCard = (props) => {
    console.log(props.children)
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="description">
              {props.children}
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Reject</div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default ApprovalCard;