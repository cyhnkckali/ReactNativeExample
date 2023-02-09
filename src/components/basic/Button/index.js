

import { Text, Pressable, StyleSheet, ActivityIndicator, StyleProp } from 'react-native'
import React from 'react'
import { themes, text, radius } from '../../../theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';


/**
 * 
 * @param {string} title 
 * @param {('text'|'rounded'|'fill')} [mode='text'] 
 * @returns 
 */
const Button = ({
    left = null,
    right = null,
    title = "",
    iconSize = text.labelmd,
    titleColor = themes.color.white,
    buttonColor = themes.color.primary,
    disabled = false,
    loading = false,
    style = null,
    rounded = false,
    mode = "text",
    ...props
}) => {

    const PaddingHorizontal = {
        left: !title && left || loading ? (48 - iconSize) / 2 : title && left || loading ? 16 : 24,
        right: !title && right ? (48 - iconSize) / 2 : title && right ? 16 : !title && !right ? (48 - iconSize) / 2 : 24,
    }

    const pressableStyle = ({ pressed }) => [{
        opacity: pressed ? 0.75 : 1,
        borderRadius: rounded ? radius.radius50 : radius.radius5,
    },
    styles.container, { backgroundColor: disabled ? themes.color.grey200 : buttonColor, paddingLeft: PaddingHorizontal.left, paddingRight: PaddingHorizontal.right }, style
    ]

    return (
        <Pressable style={pressableStyle} disabled={disabled} {...props}>
            {!loading && left && typeof left === "string" &&
                <Icon name={left} color={disabled ? themes.color.grey300 : titleColor} size={iconSize} style={{ marginRight: title ? 8 : 0 }} />
            }
            {!loading && left && typeof left !== "string" &&
                left
            }
            {
                loading &&
                <ActivityIndicator size={iconSize} color={disabled ? themes.color.grey300 : titleColor} style={{ marginRight: title ? 8 : 0 }} />
            }
            {
                title &&
                <Text style={[styles.title, { color: disabled ? themes.color.grey300 : titleColor, }]}
                >{title}</Text>
            }
            {right && typeof right === "string" &&
                <Icon name={right} color={disabled ? themes.color.grey300 : titleColor} size={iconSize} style={{ marginLeft: title ? 8 : 0 }} />
            }
            {right && typeof right !== "string" &&
                right
            }
        </Pressable >
    )
}

Button.propTypes = {
    left: PropTypes.string || PropTypes.element || PropTypes.object,
    // right = null,
    // title = "",
    // iconSize = text.labelmd,
    // titleColor = themes.color.white,
    // buttonColor = themes.color.primary,
    // disabled = false,
    // loading = false,
    // style = null,
    // rounded = false,
    // mode = "Filled",
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        minHeight: 48,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: text.labelmd,
        fontWeight: text.bold_md,
    },


})

export default Button