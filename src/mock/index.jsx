import axios from 'axios';
import MockDate from 'axios-mock-adapter';
import Shoselist from './data/shoselist';
import Toplist from './data/toplist';
import Catmovie from './data/catmovie';
import Ricelist from './data/ricelist';

const Mock =new MockDate(axios);

Mock.onGet('/shouslist').reply(200,Shoselist)
Mock.onGet('/toplist').reply(200,Toplist)
Mock.onGet('/catmovie').reply(200,Catmovie)
Mock.onGet('/ricelist').reply(200,Ricelist)