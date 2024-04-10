import React, { useState } from 'react';
import WritePost from '../../components/Post/WritePost';
import { toast } from 'react-toastify';
import PostList from '../../components/Shared/PostList';
import UserName from '../../components/Post/UserName/UserName';
 
const mock = [
    {
        __v: 0,
        count: 1,
        username: "veloperet",
        content: "테스팅테스팅",
        _id: "595f8972e3d79767f1e35430",
        comments: [],
        likes: [],
        likesCount: 1,
        createdAt: "2017-07-07T13:15:30.095Z"
    },
    {
        __v: 0,
        count: 2,
        username: "밍",
        content: "달디달고달디달고달디단밤양갱",
        _id: "595f8972e3d79767f1e35430",
        comments: [],
        likes: [],
        likesCount: 2,
        createdAt: "2020-07-07T13:15:30.095Z"
    },{
        __v: 0,
        count: 3,
        username: "잔나비",
        content: "뜨거운여름밤은가고남은건볼품없지만",
        _id: "595f8972e3d79767f1e35430",
        comments: [],
        likes: [],
        likesCount: 3,
        createdAt: "2023-07-07T13:15:30.095Z"
    },{
        __v: 0,
        count: 4,
        username: "장범준",
        content: "흔들리는꽃들속에서네샴푸향이느껴진거야",
        _id: "595f8972e3d79767f1e35430",
        comments: [],
        likes: [],
        likesCount: 4,
        createdAt: "2024-03-07T13:15:30.095Z"
    },{
        __v: 0,
        count: 5,
        username: "이영지",
        content: "암낫쏘리",
        _id: "595f8972e3d79767f1e35430",
        comments: [],
        likes: [],
        likesCount: 5,
        createdAt: "2017-04-07T13:15:30.095Z"
    },
]

function WritePostContainer() {
    const [data, setData] = useState(mock);
    const [userName, setUserName] = useState("");
    if(!data) return null;

    return (
        <>
        <UserName userName={userName} setUserName={setUserName}/>
        <WritePost setData={setData} userName={userName}/>
        <PostList data={data}/>
        </>
    );
    
}

export default WritePostContainer;