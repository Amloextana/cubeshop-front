import React, { useState } from "react"
import btnMinus from "../../assets/icons/btn_minus.svg"
import btnPlus from "../../assets/icons/btn_plus.svg"
import btnDel from "../../assets/icons/btn_delete.svg"
import mock from "../../assets/icons/user.svg"
import { useDispatch, useSelector } from "react-redux"
import styles from "./CartItem.module.scss"
import Cookies from "universal-cookie"
import { cartItemProps } from "../../types"
import axios from "axios"
import { RootState } from "../../store/store"

const cookies = new Cookies()
const CartItem: React.FC<cartItemProps> = ({
  id,
  title,
  category,
  price,
  image,
  amount,
  onDelete,
  onAmountUpdate,
  updateAllow,
}) => {
  const handleItemRemove = () => {
    onDelete(id)
  }
  const handleAmountUpdate = (action: number) => {
    onAmountUpdate(id, action)
  }

  return (
    <div className={styles.cart__item}>
      <div className={styles["cart__item-img"]}>
        <img src={image} alt="component" />
      </div>
      <div className={styles["cart__item-info"]}>
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
      <div className={styles["cart__item-count"]}>
        {updateAllow && (
          <button onClick={() => handleAmountUpdate(0)}>
            <img src={btnMinus}></img>
          </button>
        )}
        {updateAllow ? <b>{amount}</b> : <b>Кол-во: {amount}</b>}

        {updateAllow && (
          <button onClick={() => handleAmountUpdate(1)}>
            <img src={btnPlus}></img>
          </button>
        )}
      </div>
      <div className={styles["cart__item-price"]}>
        <b>{price} $</b>
      </div>
      {updateAllow && (
        <div onClick={handleItemRemove} className={styles["cart__item-remove"]}>
          <img src={btnDel}></img>
        </div>
      )}
    </div>
  )
}

export default CartItem
