import { NewItem, Preview } from './Preview';
import './List.scss';
import { useGetTemplatesQuery } from '../../Api/api';
import { Col, Row } from 'antd';
import Scrollbars from 'react-custom-scrollbars-2';
import { GithubFilled } from '@ant-design/icons';

const List = () => {
  const { data, isLoading, isError, isSuccess } = useGetTemplatesQuery();

  return (
    <Scrollbars autoHide={true} style={{ height: '100%' }}>
      <div className="template">
        <Row align="middle" justify="center" className="header">
          <Col span={24}>
            <Row align="middle" justify="center">
              <Col>
                <span className="title">Dnde</span>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row align="middle" justify="center">
              <Col>
                <span className="subtitle">
                  Drag and Drop Editor tailored for <b>Mails</b>
                </span>
              </Col>
            </Row>
          </Col>
          <Col style={{ paddingTop: '24px' }} span={24}>
            <Row align="middle" justify="center">
              <Col className="info" span={10} style={{ textAlign: 'center' }}>
                <a target="_blank" href="https://github.com/aghontpi/dnde">
                  <span>
                    All features are optimised for mails, flexible through import/export, with responsive design for all
                    devices.
                  </span>
                  <br />
                  <span>
                    Source on Github <GithubFilled style={{ position: 'relative', top: '4px', fontSize: '32px' }} />
                  </span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="template-list">
          <NewItem />
          {isSuccess && data
            ? data.response.map((item, key) => {
                return <Preview key={key} id={item.docRef} image={item.preview} />;
              })
            : null}
        </div>
      </div>
    </Scrollbars>
  );
};

export { List };
