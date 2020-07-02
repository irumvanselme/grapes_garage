import React from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Divider, ListItem, ListItemIcon, ListItemText, Collapse, List, ListSubheader } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { sidebarNavigation } from '../../../utils/sidebar-navigation';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#3867d6",
        color: "white"
    },
    subListItems: {
        fontSize: '12px'
    },
    listItemText: {
        fontSize: '13.8px',
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    listName: {
        fontSize: '15px'
    },
    back: {
        background: "black"
    }, listTitle: {
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: 'bolder',
        textTransform: 'uppercase',
        marginLeft: '60px',
        zIndex: 0
    },
    ListItem: {
        '&:hover': {
            backgroundColor: 'rgb(248, 192, 23)'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            textDecoration: 'none',
            color: 'white',
        }
    }
});


class NestedList extends React.Component {
    navigation = sidebarNavigation;
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const { classes } = this.props;
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}>
                {
                    this.navigation.map((items) =>
                        <List>
                            <ListSubheader key={items.id} className={classes.listTitle}>
                                {items.title}
                            </ListSubheader>
                            {
                                items.items.map((item) =>
                                    item.subItems == null ?
                                        <Link to={item.link} className={classes.link}>
                                            <ListItem key={item.id} button className={classes.ListItem} title={item.displayTitle}>
                                                <ListItemIcon>
                                                    <FontAwesomeIcon icon={item.icon} color='#fff' style={{ fontSize: "18px" }} />
                                                </ListItemIcon>
                                                <ListItemText component="p" classes={{ primary: classes.listItemText }} primary={item.name} />
                                            </ListItem>
                                        </Link>
                                        :
                                        <div>

                                            <ListItem key={items.id} button className={classes.ListItem} onClick={this.handleClick.bind(
                                                this,
                                                item.name
                                            )}>
                                                <ListItemIcon title={item.displayTitle}>
                                                    <FontAwesomeIcon icon={item.icon} color='#fff' style={{ fontSize: "18px" }} />
                                                </ListItemIcon>
                                                <ListItemText component="p" primary={item.name} classes={{ primary: classes.listItemText }} />
                                                {this.state[item.name] ? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>

                                            {item.subItems.map((subItems) =>
                                                <Collapse in={this.state[item.name]} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <Link to={subItems.link} className={classes.link}>
                                                            <ListItem key={subItems.link} button className={classes.nested} title={subItems.displayTitle} >
                                                                <ListItemIcon>
                                                                    <FontAwesomeIcon icon={subItems.icon} color='#f7f7f7' style={{ fontSize: "13px" }} />
                                                                </ListItemIcon>
                                                                <ListItemText classes={{ primary: classes.subListItems }} primary={subItems.name} />
                                                            </ListItem>
                                                        </Link>
                                                    </List>
                                                </Collapse>

                                            )
                                            }
                                        </div>
                                )
                            }
                            <Divider />
                        </List>
                    )
                }
            </List>
        )
    }
}
NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NestedList);

