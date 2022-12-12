import React from 'react';

const MemoComp = ({name}) => {
    console.log("Memo Render")

    return <div> 
        Memo Component {name}
    </div>;
}



export default React.memo(MemoComp) ;