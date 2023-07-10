import React, { useState } from 'react'

export const AgreementForm = () => {
  const [fullText, setFullText] = useState(85)
  const text = `Нажимая кнопку «Отправить», я соглашаюсь на получение информации от
интернет-магазина и уведомлений о состоянии моих заказов, а также
принимаю условия политики конфиденциальности и пользовательского
соглашения.`

  const arrText = text.slice(0, fullText)
  return (
    <div className=' flex flex-wrap'>
      <p className=' font-extralight text-xs break-before-all mt-4'>
        {arrText +" "}
        <button
          hidden={fullText == 500}
          className=' text-slate-400'
          onClick={() => setFullText(500)}
        >
          Далее
        </button>
      </p>
    </div>
  )
}
