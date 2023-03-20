export default function destructionObj({ special }) {
    for (const obj of special) {
      if (!obj.description) {
        obj.description = "Описание недоступно";
      }
    }
    return special;
  }
