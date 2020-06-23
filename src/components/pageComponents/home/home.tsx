import * as React from "react";

interface HomeProps {
    history: History
}

class Home extends React.Component<HomeProps, {}> {
    constructor(props: HomeProps) {
        super(props);
    }
    
    render() {
        return (
            <>
                <div className="home">Working</div>
            </>
        )
    }
}

export default Home;