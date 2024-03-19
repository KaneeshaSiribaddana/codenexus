const BASE_URL: any = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchData(data: any) {
  console.log("trigger from here");
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}
export async function fetchEmail(data: any) {
  console.log("trigger from here");
  try {
    const response = await fetch(`${BASE_URL}/users/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

export async function createStudent(data: any) {
  try {
    const response = await fetch(`${BASE_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

export async function updateProfilePic(file: File, userId: string) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${BASE_URL}/users/profile-pic/${userId}`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating profile picture:', error);
    throw error;
  }
}

export async function getStudents() {
  try {
    const response = await fetch(`${BASE_URL}/students`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}
export async function getStudent(id:any) {
    try {
      const response = await fetch(`${BASE_URL}/students/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      return res;
    } catch (error) {
      console.error("Error fetching data:", error);
      return {};
    }
  }
export async function updateUser(id:number, data: {username: string, email: string}) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}
export function Districts(districtNum: string) {
    let districtInt = parseInt(districtNum, 10);
    switch (districtInt) {
        case 1:
            return 'Colombo';
        case 2:
            return 'Gampaha';
        case 3:
            return 'Kalutara';
        case 4:
            return 'Kandy';
        case 5:
            return 'Matale';
        case 6:
            return 'Nuwara Eliya';
        case 7:
            return 'Galle';
        case 8:
            return 'Matara';
        case 9:
            return 'Hambantota';
        case 10:
            return 'Jaffna';
        case 11:
            return 'Kilinochchi';
        case 12:
            return 'Mannar';
        case 13:
            return 'Vavuniya';
        case 14:
            return 'Mullaitivu';
        case 15:
            return 'Batticaloa';
        case 16:
            return 'Ampara';
        case 17:
            return 'Trincomalee';
        case 18:
            return 'Kurunegala';
        case 19:
            return 'Puttalam';
        case 20:
            return 'Anuradhapura';
        case 21:
            return 'Polonnaruwa';
        case 22:
            return 'Badulla';
        case 23:
            return 'Moneragala';
        case 24:
            return 'Ratnapura';
        case 25:
            return 'Kegalle';
        default:
            return 'Unknown District';
    }
}
export async function deleteUsers(id:number) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

export async function updatePassword(id:number, data: {oldPassword: string, newPassword: string}) {
  try {
    const response = await fetch(`${BASE_URL}/users/change-password/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}