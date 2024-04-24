import React, { Suspense }from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { CLoading } from '@components';
import zhCN from 'antd/lib/locale/zh_CN';
const Home = React.lazy(() => import('@views/Home'));
const BasicLayout = React.lazy(() => import('@layouts/BasicLayout'));

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Suspense fallback={<CLoading visible={true} />}>
            <Routes>
              <Route exact path='/home' element={<Home />} />
              <Route exact path='*' element={<BasicLayout />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
};

export default App;
