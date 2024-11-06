export const ContactScreen = () => {
    return (
        <>
            <h2>Contact</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="text" className="form-control" name="email" placeholder="Enter email" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
