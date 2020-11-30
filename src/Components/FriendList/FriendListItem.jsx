import PropTypes from "prop-types"
import s from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline }) {
    const on = s.statusOn
    const off = s.statusOff
    return (<li className={s.item} >
  <span className={isOnline ? on:off}></span>
  <img className={s.avatar}  src={avatar} alt="" width="48" />
  <p className={s.name} >{name}</p>
</li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}