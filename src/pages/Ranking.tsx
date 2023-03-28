import { ReactComponent as Podio } from '@assets/icons/podio.svg'
import RankingList from '@components/templates/rankingList'

const Ranking = () => {
  return (
    <div className="bg-white h-screen pt-24">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-60 h-60 flex flex-col justify-end items-center rounded-full pb-10 bg-gradient-to-t from-white to-black-50">
          <div className="w-full flex flex-row justify-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full relative -bottom-5">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full relative -bottom-5">
              <img src="https://picsum.photos/200" alt="" />
            </div>
          </div>
          <Podio />
        </div>
        <RankingList />
      </div>
    </div>
  )
}

export default Ranking
