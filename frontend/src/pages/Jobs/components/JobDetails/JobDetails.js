import React from 'react'
import { Drawer } from 'antd';
import { useHistory, useLocation, useParams } from 'react-router';

export default function JobDetails() {
  const history = useHistory()
  const params = useParams()
  const { state } = useLocation()
  
    return (
      <>
        <Drawer
          width={640}
          placement="right"
          closable={true}
          onClose={() => history.goBack()}
          visible={params.id}
        >
          <h1 className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
            {state?.title}
          </h1>
          <h2 className="site-description-item-profile-p">How to apply</h2>
          <div dangerouslySetInnerHTML={{__html: state?.how_to_apply}} />
          <h2 className="site-description-item-profile-p">Description</h2>
          <div dangerouslySetInnerHTML={{__html: state?.description}} />
        </Drawer>
      </>
    );
}
