export default function destructionObj({
  special: [{
    id,
    name,
    icon,
    description = 'Описание недоступно',
  }]
}) {
  const arrCardObj = [];

  arrCardObj.push({id, name, icon, description}); 
  
      console.log(arrCardObj);
      return arrCardObj;
}
