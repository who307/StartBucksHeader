import React, { Component } from 'react';
import '../CSS/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCoffee: false,
      selectMenu: false,
      selectStore: false,
      selectRespon: false,
      selectStarbucks: false,
      selectWhats: false,
      
      menuOpen: false
    }
  }
  selectCoffee = () => {
    this.setState({
      selectCoffee: true,
      selectMenu: false,
      selectStore: false,
      selectRespon: false,
      selectStarbucks: false,
      selectWhats: false
    });
  }
  selectMenu = () => {
    this.setState({
      selectCoffee: false,
      selectMenu: true,
      selectStore: false,
      selectRespon: false,
      selectStarbucks: false,
      selectWhats: false
    });
  }
  selectStore = () => {
    this.setState({
      selectCoffee: false,
      selectMenu: false,
      selectStore: true,
      selectRespon: false,
      selectStarbucks: false,
      selectWhats: false
    });
  }
  selectRespon = () => {
    this.setState({
      selectCoffee: false,
      selectMenu: false,
      selectStore: false,
      selectRespon: true,
      selectStarbucks: false,
      selectWhats: false
    });
  }
  selectStarbucks = () => {
    this.setState({
      selectCoffee: false,
      selectMenu: false,
      selectStore: false,
      selectRespon: false,
      selectStarbucks: true,
      selectWhats: false
    });
  }
  selectWhats = () => {
    this.setState({
      selectCoffee: false,
      selectMenu: false,
      selectStore: false,
      selectRespon: false,
      selectStarbucks: false,
      selectWhats: true
    });
  }
  CategoryClose = () => {
    this.setState({
      selectCoffee: false,
      selectMenu: false,
      selectStore: false,
      selectRespon: false,
      selectStarbucks: false,
      selectWhats: false

    });
  }
  MenuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  render() {
    return (
      <header>
        <div className="Header-wrap">
          <div className="Header-div">
            <div className="Header-logo">
            </div>
            <div className="Mobile-icon">
              <img alt="마이스타벅스" src="https://www.starbucks.co.kr/common/img/common/icon_user_m.png"></img>
              <img alt="마이위치" src="https://www.starbucks.co.kr/common/img/common/icon_spot_m.png"></img>
              <img onClick={this.MenuToggle} alt="마이메뉴" src="https://www.starbucks.co.kr/common/img/common/btn_berger_m.png"></img>
            </div>
            <div className="Header-menu">
              <div onMouseOver={this.CategoryClose} className="Header-topMenu">
                <span>Sign In</span>
                <span>My Starbucks</span>
                <span>Customer Service & Ideas</span>
                <span>FInd a Store</span>
                <img alt="통합검색"
                  src="//image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png">
                </img>
              </div>
              <div className="Header-categoryMenu">
                <ul>
                  <li className={(this.state.selectCoffee ? 'Header-categoryMenu-hover' : "")}
                    onMouseOver={this.selectCoffee}>COFFEE</li>
                  <li className={(this.state.selectMenu ? 'Header-categoryMenu-hover' : '')}
                    onMouseOver={this.selectMenu}>MENU</li>
                  <li className={(this.state.selectStore ? 'Header-categoryMenu-hover' : '')}
                    onMouseOver={this.selectStore}>STORE</li>
                  <li className={(this.state.selectRespon ? 'Header-categoryMenu-hover' : '')}
                    onMouseOver={this.selectRespon}>RESPONSIBILITY</li>
                  <li className={(this.state.selectStarbucks ? 'Header-categoryMenu-hover' : '')}
                    onMouseOver={this.selectStarbucks}>STARBUCKS REWARDS</li>
                  <li className={(this.state.selectWhats ? 'Header-categoryMenu-hover' : '')}
                    onMouseOver={this.selectWhats}>WHAT'S NEW</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 카테고리영역 */}
        <div className="category-wrap">
          <div className={(this.state.selectCoffee ? 'categoryMenu-sub01 ' : '') + 'off'}
            onMouseLeave={this.CategoryClose}>
            <div className="menu-div01">
              <div className="menu-subdiv01">
                <ul>
                  <p>커피</p>
                  <li>
                    스타벅스 원두
                </li>
                  <li>
                    스타벅스 비아
                </li>
                  <li>
                    스타벅스 오라가미
                </li>
                </ul>
                <ul>
                  <p>나와 어울리는 커피</p>
                </ul>
                <ul>
                  <p>스타벅스 리저브™</p>
                  <li>
                    RESERVE MAGAZINE
                </li>
                </ul>
                <ul>
                  <p>에스프레소 음료</p>
                  <li>도피오</li>
                  <li>에스프레소마키아또</li>
                  <li>아메리카노</li>
                  <li>마키아또카푸치노</li>
                  <li>라떼모카</li>
                  <li>리스트레또 비안코</li>
                </ul>
                <ul>
                  <p>최상의 커피를 즐기는 법</p>
                  <li>커피 프레스</li>
                  <li>푸어오버</li>
                  <li>아이스 푸어 오버</li>
                  <li>커피 메이커</li>
                  <li>리저브를 매장에서 다양하게 즐기는 법</li>
                </ul>
              </div>
            </div>
            <div className="menu-div02">
              <div className="menu-subdiv02">
                <ul>
                  <p>커피 이야기</p>
                  <li>스타벅스 로스트 스팩트럼</li>
                  <li>최상의 아라비카 원두</li>
                  <li>한 잔의 커피가 완성되기까지</li>
                  <li>클로버® 커피 추출 시스템</li>
                  <li>스타벅스 디카페인</li>
                </ul>
              </div>
            </div>
            <div className="menu-div03">
              <div className="menu-subdiv03">
                <ul>
                  <li>나와 어울리는 커피 찾기</li>
                  <span>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</span>
                </ul>
                <ul>
                  <li>최상의 커피를 즐기는 법</li>
                  <span>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</span>
                </ul>
              </div>
            </div>
          </div>
          <div className={(this.state.selectMenu ? 'categoryMenu-sub02 ' : '') + 'off'}
            onMouseLeave={this.CategoryClose}>
            <div className="menu-div01">
              <div className="menu-subdiv01">
                <ul>
                  <p>음료</p>
                  <li>콜드 브루</li>
                  <li>브루드 커피</li>
                  <li>에스프레소</li>
                  <li>프라푸치노</li>
                  <li>블렌디드</li>
                  <li>스타벅스 피지오</li>
                  <li>티(티바나)</li>
                  <li>기타 제조 음료</li>
                  <li>스타벅스 주스(병음료)</li>
                </ul>
                <ul>
                  <p>푸드</p>
                  <li>브레드</li>
                  <li>케이크</li>
                  <li>샌드위치 & 샐러드</li>
                  <li>따뜻한 푸드</li>
                  <li>과일 & 요거트</li>
                  <li>스낵 & 미니 디저트</li>
                  <li>아이스크림</li>
                </ul>
                <ul>
                  <p>상품</p>
                  <li>머그</li>
                  <li>글라스</li>
                  <li>플라스틱 텀블러</li>
                  <li>스테인리스 텀블러</li>
                  <li>보온병액세서리</li>
                  <li>커피 용품</li>
                  <li>패키지 티(티바나)</li>
                  <li>스타벅스 플래너</li>
                </ul>
                <ul>
                  <p>카드</p>
                  <li>실물카드</li>
                  <li>-Gift 카드</li>
                </ul>
                <ul>
                  <p>메뉴 이야기</p>
                  <li>나이트로 콜드브루</li>
                  <li>콜드 브루</li>
                  <li>스타벅스 티바나</li>
                </ul>
              </div>
            </div>
            <div className="menu-div03">
              <div className="menu-subdiv03">
                <ul>
                  <li>나이트로 콜드 브루
              <img alt="new" src="https://image.istarbucks.co.kr/common/img/common/icon_gnb_new.png"></img>
                  </li><span>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</span>
                </ul>
              </div>
            </div>
          </div>
          <div className={(this.state.selectStore ? 'categoryMenu-sub03 ' : '') + 'off'}
            onMouseLeave={this.CategoryClose}>
            <div className="menu-div01">
              <div className="menu-subdiv01">
                <ul>
                  <p>매장 찾기</p>
                  <li>퀵 검색</li>
                  <li>지역 검색</li>
                  <li>My 매장</li>
                </ul>
                <ul>
                  <p>드라이브 스투 매장</p>
                </ul>
                <ul>
                  <p>스타벅스 리저브™매장</p>
                </ul>
                <ul>
                  <p>커뮤니티 스토어 매장</p>
                </ul>
                <ul>
                  <p>매장 이야기</p>
                  <li>청담스타</li>
                  <li>티바나 바 매장</li>
                  <li>파미에 파크</li>
                </ul>
              </div>
            </div>
            <div className="menu-div03">
              <div className="menu-subdiv03">
                <ul>
                  <li>매장찾기</li>
                  <span>보다 빠르게 매장을 찾아보세요.</span>
                  <li>이대R점
              <img alt="new" src="https://image.istarbucks.co.kr/common/img/common/icon_gnb_new.png"></img>
                  </li>
                  <span>1호점 특화 MD와 티바나 티, 최고의 리저브 커피를 만나보세요.</span>
                </ul>
              </div>
            </div>
          </div>
          <div className={(this.state.selectRespon ? 'categoryMenu-sub04 ' : '') + 'off'}
            onMouseLeave={this.CategoryClose}>
            <div className="menu-div01">
              <div className="menu-subdiv01">
                <ul>
                  <p>사회 공험 캠페인 소개</p>
                </ul>
                <ul>
                  <p>지역사회 참여활동</p>
                  <li>희망배달 캠페인</li>
                  <li>커뮤니티 스토어</li>
                  <li>청년인재 양성</li>
                  <li>우리 농산물 사랑 캠페인</li>
                  <li>우리 문화 지키기</li>
                </ul>
                <ul>
                  <p>환경보호 활동</p>
                  <li>환경 발자국 줄이기</li>
                  <li>일회용 컵 없는 매장</li>
                  <li>커피 원두 재활용</li>
                </ul>
                <ul>
                  <p>윤리 구매</p>
                  <li>윤리적 원두 구매</li>
                  <li>공정무역 인증</li>
                  <li>커피 농가 지원 활동</li>
                </ul>
                <ul>
                  <p>글로벌 사회 공헌</p>
                  <li>윤리경영 보고서</li>
                  <li>스타벅스 재단</li>
                  <li>지구촌 봉사의 달</li>
                </ul>
              </div>
            </div>
            <div className="menu-div03">
              <div className="menu-subdiv03">
                <ul>
                  <li>커피원두 재활용</li>
                  <span>스타벅스 커피 원두를 재활용해 보세요.</span>
                </ul>
              </div>
            </div>
          </div>
          <div className={(this.state.selectStarbucks ? 'categoryMenu-sub05 ' : '') + 'off'}
            onMouseLeave={this.CategoryClose}>
            <div className="menu-div01">
              <div className="menu-subdiv01">
                <ul>
                  <p>스타벅스 리워드</p>
                  <li>스타벅스 리워드 소개</li>
                  <li>등급 및 혜택</li>
                  <li>스타벅스 별</li>
                  <li>자주하는 질문</li>
                </ul>
                <ul>
                  <p>스타벅스 카드</p>
                  <li>스타벅스 카드 소개</li>
                  <li>스타벅스 카드 갤러리</li>
                  <li>등록 및 조회</li>
                  <li>충전 및 이용안내</li>
                  <li>분실신고/환불신청</li>
                  <li>자주하는 질문</li>
                </ul>
                <ul>
                  <p>스타벅스 e-Gift Card</p>
                  <li>스타벅스 e-Gift Card 소개</li>
                  <li>이용안내</li>
                  <li>선물하기</li>
                  <li>자주하는 질문</li>
                </ul>
              </div>
            </div>
            <div className="menu-div03">
              <div className="menu-subdiv03">
                <ul>
                  <li>스타벅스 카드 등록하기</li>
                  <span>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</span>
                </ul>
              </div>
            </div>
          </div>
          <div className={(this.state.selectWhats ? 'categoryMenu-sub06 ' : '') + 'off'}
            onMouseLeave={this.CategoryClose}>
            <div className="menu-div01">
              <div className="menu-subdiv01">
                <ul>
                  <p>프로모션&이벤트</p>
                  <li>전체</li>
                  <li>스타벅스 카드스타벅스 리워드</li>
                  <li>온라인</li>
                  <li>크리스마스e-프리퀀시 증정품</li>
                </ul>
                <ul>
                  <p>새소식</p>
                  <li>전체</li>
                  <li>상품 출시</li>
                  <li>스타벅스와 문화</li>
                  <li>스타벅스 사회공헌</li>
                  <li>스타벅스 카드출시</li>
                </ul>
                <ul>
                  <p>매장별 이벤트</p>
                  <li>일반 매장</li>
                  <li>신규 매장</li>
                </ul>
                <ul>
                  <p>e-프리퀀시</p>
                  <li>이용안내</li>
                  <li>이용현황</li>
                </ul>
                <ul>
                  <p>공지사항</p>
                </ul>
                <ul>
                  <p>웰페이퍼</p>
                </ul>
              </div>
            </div>
            <div className="menu-div03">
              <div className="menu-subdiv03">
                <ul>
                  <li>매장별 이벤트</li>
                  <span>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</span>
                </ul>
                <ul>
                  <li>웰페이퍼</li>
                  <span>매월 업데이트되는 웰페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</span>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={'Mobile-menu ' + (this.state.menuOpen ? 'menuOpen' : '')}>
          <div className="Mobile-wrap">
            <ul className="Mobile-search">
              <img className="closeBtn" onClick={this.MenuToggle} alt="닫기" src="https://www.starbucks.co.kr/common/img/common/btn_gnb_close.png"></img>
              <input type="text"></input>
              <div className="Mobile-searchBtn">Search</div>
            </ul>
            <ul className="Mobile-mystarbucks">
              <div className="mobile-wrap">
                <li>My Starbucks</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
            <ul className="Mobile-coffee">
              <div className="mobile-wrap">
                <li>COFFEE</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
            <ul className="Mobile-menu1">
              <div className="mobile-wrap">
                <li>MENU</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
            <ul className="Mobile-store">
              <div className="mobile-wrap">
                <li>STORE</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
            <ul className="Mobile-respon">
              <div className="mobile-wrap">
                <li>RESPONSIBILITY</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
            <ul className="Mobile-starbucksRewards">
              <div className="mobile-wrap">
                <li>Startbucks Rewards</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
            <ul className="Mobile-whatsNew">
              <div className="mobile-wrap">
                <li>WHAT'S NEW</li>
                <img alt="화살버튼" src="https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png"></img>
              </div>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
