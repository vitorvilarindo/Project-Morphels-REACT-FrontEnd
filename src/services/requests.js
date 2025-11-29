import api from "./api.js";

class MainRequests  {
    async onGet (route, search) {
        const response = await api.get(`/${route}?search=${encodeURIComponent(search)}`)
        return response.data
    }

    async onFilter (route, params) {
        const response = await api.get(`/${route}/filter?type=${encodeURIComponent(params.type)}&date1=${encodeURIComponent(params.start_date)}&date2=${encodeURIComponent(params.end_date)}`)
        return response.data
    }

    async onPost (route, params) {
        const response = await api.post(`/${route}`, params)
        return response.data
    }

    async onPut (route, params) {
        const response = await api.put(`/${route}`, params)
        return response.data
    }
    async onDelete (route, id) {
        await api.delete(`/${route}/${id}`)
    }
}


export default MainRequests;