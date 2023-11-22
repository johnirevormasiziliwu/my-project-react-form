import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: "",
      email: "",
      gender: "Select Gender",
    };

    // binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);
    this.onSumbitEventHandler = this.onSumbitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        gender: event.target.value,
      };
    });
  }

  onSumbitEventHandler(event) {
    event.preventDefault();

    const message = `
    Name: ${this.state.name}
    Email: ${this.state.email}
    Gender: ${this.state.gender}`;
    alert(message);
  }

  render() {
    return (
      <div className="p-3">
        <h1 className="text-center font-semibold">Register Form</h1>
        <div className="form my-4">
          <form onSubmit={this.onSumbitEventHandler}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="font-semibold  text-zinc-600 text-lg"
              >
                Name
              </label>
              <div className="w-full bg-white shadow border mt-1 border-zinc-300 h-10 rounded-md items-center">
                <input
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChangeEventHandler}
                  className="bg-white shadow h-10 w-full rounded-md p-3"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="font-semibold  text-zinc-600 text-lg"
              >
                Email
              </label>
              <div className="w-full bg-white shadow border mt-1 border-zinc-300 h-10 rounded-md items-center">
                <input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onEmailChangeEventHandler}
                  className="bg-white shadow h-10 w-full rounded-md p-3"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="font-semibold  text-zinc-600 text-lg"
              >
                Gender
              </label>
              <div className="w-full bg-white shadow border mt-1 border-zinc-300 h-10 rounded-md items-center">
                <select
                  name="gender"
                  id="gender"
                  value={this.state.gender}
                  onChange={this.onGenderChangeEventHandler}
                  className="w-full pl-3 pr-3 h-10 rounded-md bg-white shadow "
                  required
                >
                  <option value="Select Gender" disabled>
                    Select Gender
                  </option>
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                </select>
              </div>
            </div>
            <div className="button mt-[80px]">
              <button
                type="submit"
                className="bg-orange-600 w-full h-10 rounded-md text-white text-lg font-semibold shadow-orange-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MyForm;
