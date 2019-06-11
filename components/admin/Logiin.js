import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Loader from 'react-loader-spinner'
import { emailChanged, passwordChanged, loginUser } from '../../actions';

class Login extends Component {

    componentDidMount()
    {
        console.log('inside component did mount');
        console.log(this.props);
    }
    onEmailChange(text)
    {
        this.props.emailChanged(text.target.value);
    }

    onPasswordChange(text)
    {
        this.props.passwordChanged(text.target.value);
    }

    onButtonPress(text)
    {
    
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError()
    {
        if (this.props.error)
        {
            return (
               <Alert variant='danger'>{this.props.error}</Alert>
            );
        }
    }

    renderButton()
    {
        if (this.props.loading)
        {
            return (<Loader 
                type="Puff"
                color="#ff6c00"
                height="50"	
                width="50"
            />);
        }
        return (
            <button type="button" value="submit" onClick={this.onButtonPress.bind(this)} className="primary-btn">Log In</button>
        )
    }
    
  
    render() {
        let authRedirect = null;
        if (this.props.isAuthenticated)
        {
            authRedirect = <Redirect to='/' />;
        }
        return (
           <div>
               {authRedirect}
            <section className="login_box_area section_gap">
            
		<div className="container">
			<div className="row">


				<div className="col-lg-12">
					<div className="login_form_inner">
                    {this.renderError()}
						<h3>Log in to enter</h3>
						<form className="row login_form" >
							
                            <div className="col-md-12 form-group">
								<input type="text" onChange={this.onEmailChange.bind(this)} value={this.props.email} className="form-control" id="name" name="name" placeholder="Username" />
							</div>

							<div className="col-md-12 form-group">
								<input type="text" onChange={this.onPasswordChange.bind(this)} value={this.props.password} className="form-control" id="password" name="password" placeholder="Password" />
							</div>

							<div className="col-md-12 form-group">

								<div className="creat_account">
									<input type="checkbox" id="f-option2" name="selector" />
									<label htmlFor="f-option2">Keep me logged in</label>
								</div>

							</div>
                            
							<div className="col-md-12 form-group">
                                    {this.renderButton()}
								
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div> 
   );
}
}

const mapStateToProps = state => {
    console.log('mapstate start');
    console.log(state.auth);
    console.log('mapstate end');
return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null
};
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
