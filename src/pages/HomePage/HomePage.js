import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Router } from '@reach/router';
//route
import Journeys from './Journeys';
import Matchings from './Matchings';
import Requests from './Requests';
import Profile from './Profile';

import styled from 'styled-components';

const Main = styled.div`
    height: 500px;
    overflow-y: auto;
`

class HomePage extends Component {
    render() {

        const journeys = [
            { id: 1, title: "Title 1", time: "2018-09-16 08:30:00" },
            { id: 2, title: "Title 2", time: "2018-09-16 08:30:00" },
            { id: 3, title: "Title 3", time: "2018-09-16 08:30:00" },
            { id: 4, title: "Title 4", time: "2018-09-16 08:30:00" },
            { id: 5, title: "Title 5", time: "2018-09-16 08:30:00" },
            { id: 6, title: "Title 6", time: "2018-09-16 08:30:00" },
        ];

        const matchings = [
            { id: 1, title: "Title 1", location: "Sư Vạn hạnh",time: "2018-09-16 08:30:00" },
            { id: 2, title: "Title 2", location: "Sư Vạn hạnh",time: "2018-09-16 08:30:00" },
            { id: 3, title: "Title 3", location: "Phố Đi Bộ Nguyễn Huệ",time: "2018-09-16 08:30:00" },
            { id: 4, title: "Title 4", location: "Trần Duy Hưng",time: "2018-09-16 08:30:00" },
            { id: 5, title: "Title 5", location: "Bùi Viện",time: "2018-09-16 08:30:00" },
            { id: 6, title: "Title 6", location: "Trương Quốc Dung",time: "2018-09-16 08:30:00" },
        ];

        const requests = [
            { id: 1, title: "Kết bạn nhé", location: "Sư Vạn hạnh",time: "2018-09-16 08:30:00" },
            { id: 2, title: "Cậu có thể chở mình được không", location: "Sư Vạn hạnh",time: "2018-09-16 08:30:00" },
            { id: 3, title: "Chở đi chứ chờ gì nữa giáo sư", location: "Phố Đi Bộ Nguyễn Huệ",time: "2018-09-16 08:30:00" },
            { id: 4, title: "Hiiiiii", location: "Trần Duy Hưng",time: "2018-09-16 08:30:00" },
            { id: 5, title: "Hello người lạ", location: "Bùi Viện",time: "2018-09-16 08:30:00" },
            { id: 6, title: "Éc éc éc", location: "Trương Quốc Dung",time: "2018-09-16 08:30:00" },
        ];

        const info = {
            name: "Aoi Sora",
            phone: "0978165924",
            facebook: "fb/...",
            address: "Trần Duy Hưng",
            school: "ĐH KHTN",
            schedule: "Every Monday",
            time: "08:00",
            bio: "Tao hơi mệt rồi đó :)"
        }

        return (
            <div>
                <Header/>
                <Main>
                    <Router>
                        <Journeys path="/" journeys={journeys} />
                        <Matchings path="matching" matchings={matchings} />
                        <Requests path="request" requests={requests} />
                        <Profile path="profile" isRequested={true} info={info} />
                    </Router>
                </Main>
                <Footer />
            </div>
        );
    }
}

export default HomePage;