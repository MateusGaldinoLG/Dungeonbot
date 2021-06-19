module.exports = function validateMessage(detailObj){
    if(typeof detailObj.higher_level === 'undefined'){
        detailObj.higher_level = "";
    }else{
        detailObj.higher_level = `**On Higher Levels**: ${detailObj.higher_level}`
    } //sees if magic has higher level details

    if(typeof detailObj.material === 'undefined'){
        detailObj.material = "";
    } else{
        detailObj.material = `(${detailObj.material})`;
    } //sees if magic utilizes materials

    if(detailObj.level == 0){
        detailObj.level = 'cantrip'
    }else if(detailObj.level == 1){
        detailObj.level = `${detailObj.level}st level`
    }else if(detailObj.level == 2){
        detailObj.level = `${detailObj.level}nd level`
    }else if(detailObj.level == 3){
        detailObj.level = `${detailObj.level}rd level`
    }else{
        detailObj.level = `${detailObj.level}th level`
    } //sets the magic level

    if(Array.isArray(detailObj.classes)){
        let classes = detailObj.classes
        let classText = '';
        for(let i = 0; i < classes.length; i++){
            classText += classes[i].name;
            if(i !== classes.length -1){
                classText += ', '
            }
        }
        detailObj.classes = classText;
    }

    if(detailObj.concentration == true){
        detailObj.duration = `Concentration, ${detailObj.duration}`
    } //sees if the duration requires concetration
}