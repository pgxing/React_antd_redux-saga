import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';


function App(props) {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ height: '100%' }}>
        {props.children}
      </div>
    </ConfigProvider>
  );
}

export default App;
