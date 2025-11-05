import TradingViewWidget from '@/components/home/TradingViewWidget'
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG,
} from '@/constants/widget'

const Home = () => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

    return (
        <div className='home-wrapper flex min-h-screen'>
            <section className='home-section grid w-full gap-8'>
                <div className='md:col-span-1 xl:col-span-1'>
                    <TradingViewWidget
                        title='주요 종목 한눈에 보기'
                        scriptUrl={`${scriptUrl}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        className='custom-chart'
                        height={600}
                    />
                </div>
                <div className='md-col-span xl:col-span-2'>
                    <TradingViewWidget
                        title='주식 시장 히트맵'
                        scriptUrl={`${scriptUrl}stock-heatmap.js`}
                        config={HEATMAP_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>
            <section className='home-section grid w-full gap-8'>
                <div className='h-full md:col-span-1 xl:col-span-1'>
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}timeline.js`}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
                <div className='h-full md:col-span-1 xl:col-span-2'>
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}market-quotes.js`}
                        config={MARKET_DATA_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>
        </div>
    )
}

export default Home
