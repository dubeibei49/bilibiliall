import React,{Component} from 'react';
import 'common/css/pagenum.css';

class PageNum extends Component{
	constructor(props){
		super(props);
		this.state={
			currentPage:1,
			groupCount:5,
			startPage:1,
			totalPage:1
		}
	}
	
	createPage() {
        const {currentPage, groupCount, startPage,totalPage} = this.state;
        let pages = []
        //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={this.prePageHandeler.bind(this)}
                       key={0}>
            上一页</li>)

        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                               className={currentPage === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : null} key={1}
                           onClick={this.pageClick.bind(this, 1)}>1</li>)

            let pageLength = 0;
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : null} key={i}
                                   onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
            pages.push(<li className={currentPage === totalPage ? "activePage" : null} key={totalPage}
                           onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
        }
//        下一页
        pages.push(<li className={currentPage === totalPage ? "nomore" : null}
                       onClick={this.nextPageHandeler.bind(this)}
                       key={totalPage + 1}>下一页</li>)
        return pages;

    }
	pageClick(currentPage) {
        const {groupCount} = this.state
        const getCurrentPage = this.props.pageCallbackFn;

        if (currentPage >= groupCount) {
            this.setState({
                startPage: currentPage - 2,
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage
        })
        getCurrentPage(currentPage)
   	}
	prePageHandeler() {
        let {currentPage} = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    //下一页
    nextPageHandeler() {
        let {currentPage,totalPage} = this.state
        if (++currentPage > totalPage) {
            return false
        }
        this.pageClick(currentPage)
    }
	render() {
        const pageList = this.createPage();
        return (
            <ul className="page-container">
                {pageList}
            </ul>
        )
   }
}
export default PageNum;