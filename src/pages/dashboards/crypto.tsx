import { Row, Col } from "reactstrap";
import CryptoBuySell from "../../components/dashboards/crypto/CryptoBuySell";
import CryptoChart from "../../components/dashboards/crypto/CryptoChart";
import CryptoExchange from "../../components/dashboards/crypto/CryptoExchange";
import CryptoOrder from "../../components/dashboards/crypto/CryptoOrder";
import CryptoTable from "../../components/dashboards/crypto/CryptoTable";
import CryptoTopCards from "../../components/dashboards/crypto/CryptoTopCards";
import CryptoTrade from "../../components/dashboards/crypto/CryptoTrade";

const Crypto = () => {
  return (
    <>
      {/********************* Crypto Top Cards ************************/}
      <CryptoTopCards />
      {/********************* Crypto Chart ************************/}
      <CryptoChart />
      {/********************* Crypto Exchange & Order ************************/}
      <Row>
        <Col lg="6">
          <CryptoExchange />
        </Col>
        <Col lg="6">
          <CryptoOrder />
        </Col>
      </Row>
      {/********************* Crypto Table ************************/}
      <Row>
        <Col lg="12">
          <CryptoTable />
        </Col>
      </Row>
      {/********************* Crypto Trade & Buy Sell ************************/}
      <Row>
        <Col lg="6">
          <CryptoTrade />
        </Col>
        <Col lg="6">
          <CryptoBuySell />
        </Col>
      </Row>
    </>
  );
};

export default Crypto;
