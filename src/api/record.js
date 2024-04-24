import { axios } from '@utils/request'

export function getList (d) {
    return axios({
        url: `/record/list`,
        method: 'post',
        data: d
    })
}

export function saveD (d) {
    return axios({
        url: `/record/save`,
        method: 'post',
        data: d
    })
}


