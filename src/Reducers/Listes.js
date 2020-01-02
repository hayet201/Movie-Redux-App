
const State = {
    list: [
        {
            id: 1, 
            name: "Dachera", 
            rating: 3, 
            image: "https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2019/01/film-aff-dachra-bouchnak.jpg",
            Description: "Dachra est un film d'horreur tunisien écrit et réalisé par Abdelhamid Bouchnak et sorti en 2018 . Il est le premier film tunisien rentable en vingt ans(financièrement et en nombre d'entrées), alors qu'il n'a pas bénéficié de subventions de l'État tunisien, d'aides de la part de sponsors et de fonds tunisiens ou étrangers" },
       
           {
            id: 2, 
            name: "Inception", 
            rating: 5,
            image: "https://www.cinemaffiche.fr/2041-tm_large_default/inception.jpg", 
            Description:"Il met en scène Ellen Page, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard et Leonardo DiCaprio. Celui-ci interprète un « extracteur », un voleur qui subtilise des informations sensibles dans un contexte d'espionnage industriel en infiltrant le subconscient de ses cibles au cours d'un « rêve partagé ». Alors qu'il est recherché par la police américaine, on lui offre une chance de retrouver son ancienne vie en échange d'un travail considéré comme impossible : l'« inception ». À l'inverse de l’extraction, il s'agit de l'implantation d'une idée étrangère dans le subconscient d'un sujet qui la considérera à son réveil comme étant l'une des siennes." }]
}
const Listes = (state = State.list, action) => {

    if (action.type === "ADD_MOVIE") {
        return ([...state, action.payload])
    }
    else if (action.type === "EDIT_MOVIE") {
        return [...state.filter(el => el.id !== action.payload.id), action.payload]

    }
    else if (action.type === "DELETE_MOVIE") {
        return state.filter(el => el.id !== action.payload)
    }
    else if (action.type === "SET_DESCRIPTION"){
        return [...state.filter(el => el.id === action.payload)]
    }
    else {
        return [...state]
    }


}

export default Listes